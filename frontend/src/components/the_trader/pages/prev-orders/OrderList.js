import React  from 'react';

import OrderCard from './OrderCard';

const OrderList = (props) => {

    if(!props.data) {
        return (
            <div></div>
        )
    } else {
        //Dynamic list of choices
        return (
            <div className="orderlist-container" style={{width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'#e0e0e0'}}>
                
                {
                    props.data.map((orderDetails, i) => {
                        /*Allows for dynamic number of choices*/
                        return (
                            <OrderCard 
                                key={i /*For React to identify each item-card through key*/}
                                order={props.data[i] /*Item to display*/} 
                            />
                        );
                    })
                }
            </div>
        );
    }
}   

export default OrderList;