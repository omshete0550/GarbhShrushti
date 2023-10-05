import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { useState } from 'react';
import { useEffect } from 'react';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };
  const [data,setData] = useState([]);
  useEffect(()=>{
    function getAppointments(){
      const resp = fetch("http://localhost:8800/api/doctors/applied",
      {
        method:'POST',
        headers:{
        'Content-Type':"application/json",
        },
        body:JSON.stringify({
          username:"shete"
        })
      }).then((res)=>res.json()).then((data)=>{
        const requestedAppointments = data.appointments;
        const finalData = requestedAppointments.filter(appointment => appointment.status === 'Requested');
        setData(finalData)
        console.log(data)
      });
      console.log(data)
    }
    getAppointments();
  },[])
  

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="New Appointments" />
      <GridComponent
        dataSource={data}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        dataStateChange={(args) => {
          if (args.action && args.requestType === 'filtering') {
            // Apply a filter to hide rows with status other than 'requested'
            args.data = args.data.filter((item) => item.status === 'Requested');
          }
        }}
      >
        <ColumnsDirective>
        
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
