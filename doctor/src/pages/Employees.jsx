import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useState } from 'react';
import { useEffect } from 'react';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const [data,setData] = useState([]);
  const editing = { allowDeleting: true, allowEditing: true };
  useEffect(()=>{
    function getAppointments(){
      const resp = fetch("http://localhost:8800/api/doctors/applied",
      {
        method:'POST',
        headers:{
        'Content-Type':"application/json",
        },
        body:JSON.stringify({
          username:"Parth"
        })
      }).then((res)=>res.json()).then((data)=>{
        const requestedAppointments = data.appointments;
        const finalData = requestedAppointments.filter(appointment => appointment.status === 'Completed');
        setData(finalData)
        console.log(finalData)
      });
    }
    getAppointments();
  },[])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Past Patients" />
      <GridComponent
        dataSource={data}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
