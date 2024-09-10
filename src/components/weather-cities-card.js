import React from "react";
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';


export function WeatherCitiesCard() {
   return (
     <div className="card card-bg text-center">
       <Card style={{backgroundColor: 'black'}}>
         <div className="flex flex-row flex-wrap">
           <div className="border-round flex align-items-center justify-content-center">
             <Card style={{ backgroundColor: 'rgba(47,48,64,0.97)', color:'white', padding:'0.1rem',margin:'2rem', borderRadius:'1.1rem', width:'30rem'}}>
               <div className="grid p-3">
                 <div className="col">
                   <div className="align-items-start" style={{ textAlign: 'left'}}>
                     <span className="text-5xl lg:font-bold">-1&deg;</span>
                     <p className="block font-light text-xs"><i className="pi pi-cloud text-color-secondary mx-1 text-3xl"></i>cloudy</p>
                     <span className="block">Feels like <span>-4&deg;c</span></span>
                   </div>
                 </div>
                 <div className="col">
                   <div className="align-items-end" style={{textAlign: 'right'}}>
                     <span className="font-semibold text-2xl">Helsinki</span>
                     <span className="block text-xs font-light">09:45am</span>
                     <br/>
                     <p className="block font-light text-xs"><i className="pi pi-angle-right text-color-secondary mx-1 "></i>5,14 m/s</p>
                     <small className="block text-xs">-1&deg; to 3&deg;</small>
                   </div>
                 </div>
               </div>
             </Card>
             <div className="flex flex-row justify-content-between">
               <Card style={{ backgroundColor: 'rgba(47,48,64,0.97)', color:'white', padding:'0.1rem',margin:'1rem',height:'10.5rem', borderRadius:'1.1rem', width:'auto'}}>
                 <div className="align-items-center p-2">
                   <span className="block text-xs font-light">09:45am</span>
                   <hr/>
                   <i className="pi pi-cloud text-color-secondary mx-1 text-3xl"></i>
                   <p className="block font-light text-xs">cloudy</p>
                   <span className="text-3xl lg:font-bold">-1&deg;</span>
                 </div>
               </Card>
               <Card style={{ backgroundColor: 'rgba(47,48,64,0.97)', color:'white', padding:'0.1rem',margin:'1rem', height:'10.5rem', borderRadius:'1.1rem', width:'auto'}}>
                 <div className="align-items-center p-2">
                   <span className="block text-xs font-light">09:45am</span>
                   <hr/>
                   <i className="pi pi-cloud text-color-secondary mx-1 text-3xl"></i>
                   <p className="block font-light text-xs">cloudy</p>
                   <span className="text-3xl lg:font-bold">-1&deg;</span>
                 </div>
               </Card>
               <Card style={{ backgroundColor: 'rgba(47,48,64,0.97)', color:'white', padding:'0.1rem',margin:'1rem', height:'10.5rem', borderRadius:'1.1rem', width:'auto'}}>
                 <div className="align-items-center p-2">
                   <span className="block text-xs font-light">09:45am</span>
                   <hr/>
                   <i className="pi pi-cloud text-color-secondary mx-1 text-3xl"></i>
                   <p className="block font-light text-xs">cloudy</p>
                   <span className="text-3xl lg:font-bold">-1&deg;</span>
                 </div>
               </Card>
               <Card style={{ backgroundColor: 'rgba(47,48,64,0.97)', color:'white', padding:'0.1rem',margin:'1rem', height:'10.5rem', borderRadius:'1.1rem', width:'auto'}}>
                 <div className="align-items-center p-2">
                   <span className="block text-xs font-light">09:45am</span>
                   <hr/>
                   <i className="pi pi-cloud text-color-secondary mx-1 text-3xl"></i>
                   <p className="block font-light text-xs">cloudy</p>
                   <span className="text-3xl lg:font-bold">-1&deg;</span>
                 </div>
               </Card>
               <Card style={{ backgroundColor: 'rgba(47,48,64,0.97)', color:'white', padding:'0.1rem',margin:'1rem', height:'10.5rem', borderRadius:'1.1rem', width:'auto'}}>
                 <div className="align-items-center p-2">
                   <span className="block text-xs font-light">09:45am</span>
                   <hr/>
                   <i className="pi pi-cloud text-color-secondary mx-1 text-3xl"></i>
                   <p className="block font-light text-xs">cloudy</p>
                   <span className="text-3xl lg:font-bold">-1&deg;</span>
                 </div>
               </Card>
             </div>
           </div>
         </div>
       </Card>
     </div>
   )
}
