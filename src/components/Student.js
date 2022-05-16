import React, { useState } from 'react'

const student = () => {
    var [name,setName]=useState("Anju Lekshmi")
    var [age,setAge]=useState("22")
    var [college,setCollege]=useState("MZC")
        const changeName=()=>{
            setName(
                name="lechu"
                
            )
            setAge(
                age="23"
                
            )
            setCollege(
                college="nss"
                
            )
        }
    
  return (
    <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-mg-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name<br/>{name}</label>

                </div>
                <div class="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Age<br/>{age}</label> 

                </div>
                <div class="col col-12 col-sm-12 col-mg-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">collage<br/>{college}</label>

                </div>
                <div class="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                <button onClick={changeName} className='btn btn-success'>Change</button>
            </div>
        </div>
    </div>
</div>
</div>
  )
}


export default student