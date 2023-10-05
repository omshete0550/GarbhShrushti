import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { useState } from 'react';
import { useEffect } from 'react';

const Orders = () => {
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
        const acceptedAppointments = data.appointments;
        const finalData = acceptedAppointments.filter(appointment => appointment.status === 'accepted');
        console.log(finalData)
        
        setData(finalData);
        console.log(data)
      });
    }
    getAppointments();
  },[])
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Ongoing Appoinments" />
      <GridComponent
        id="gridcomp"
        dataSource={data}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Orders;
