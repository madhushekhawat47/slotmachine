import React from 'react';
const SlotM =(props)=>
{
    // let X= '😄';
    // let y= '😄';
    // let z='🎅';
    
    // let X=props.X;
    // let y=props.y;
    // let z=props.z;
    let {X,y,z}=props;
    if((X===y) && (y===z))
    {
        return(
            <>
                <div className="slot_inner">
                <h1>
                    {X} {y} {z}
                </h1>
                <h1>this is matching.</h1>
                <hr></hr>

                </div>
            </>
        )
    }
    else
{
    return(
        <>
            <div className="slot_inner">
            <h1>
                {X} {y} {z}
            </h1>
            <h1>this is  Not Matching.</h1>
            <hr></hr>

            </div>
        </>
    )
}
}
export default SlotM;