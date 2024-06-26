import { HiOutlineAdjustments } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const paymentData = [
    {
        transactionId: 'PH56743',
        description: 'Sales',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Pharmacy',       
        amount : 'N20,000',
    },
    {
        transactionId: 'PH56743',
        description: 'New Stocks',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Ob-Gyn',
        amount : 'N20,000',
          
    },
    {
        transactionId: 'PH56743',
        description: 'Sales',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Pharmacy',
        amount : 'N20,000',      
    },
    {
        transactionId: 'PH56743',
        description: 'New Items',
        date: 'Today, 12:00PM',
        status: 'Pending',
        category: 'Pharmacy',
        amount : '-N20,000',
    },
    {
        transactionId: 'PH56743',
        description: 'New Items',
        date: 'Today, 12:00PM',
        status: 'Pending',
        category: 'Laboratory',
        amount : '-N20,000', 
    },
    {
        transactionId: 'PH56743',
        description: 'Malaria tests',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Laboratory',
        amount : 'N20,000',
    },
    {
        transactionId: 'PH56743',
        description: 'New Items',
        date: 'Today, 12:00PM',
        status: 'Pending',
        category: 'Laboratory',
        amount : '-N20,000',  
    },
    {
        transactionId: 'PH56743',
        description: 'Malaria tests',
        date: 'Today, 12:00PM',
        status: 'Completed',
        category: 'Laboratory',
        amount : 'N20,000',
    },
];

const RecentOrders = () => {
    const textColor = paymentData.map(each => {
        if (each.amount === "N20,000") {
            return 'green';
        } else if (each.amount === '-N20,000') {
            return 'orange';
        } else {
            return 'blue';
        }
    });


  return (
    <>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 overflow-hidden">
			<div className="flex justify-between py-3 px-2.5 text-sm text-left border-y bg-neutral-100">
                <div className=" flex justify-start space-x-4  text-center" >
                <strong className="text-gray-700 font-bold mt-1">Recent Transactions</strong>
                <button className='border rounded border-gray-200 p-0 text-sm flex flex-row items-center bg-neutral-50'>Today <RiArrowDropDownLine /></button>
                <button className='border rounded border-gray-200 p-0 text-sm flex flex-row items-center bg-neutral-50'>March 2024<RiArrowDropDownLine /></button>              
                </div>
		 <button className='border rounded border-gray-200 px-2 text-sm flex flex-row items-center bg-neutral-50'><HiOutlineAdjustments /> Filter</button> </div> 
            <div className="mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>                            
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>    
                        </tr>
                    </thead>
                    <tbody>
					{paymentData.map((pay, index) => (
                            <tr key={index}>
                                <td>{pay.date}</td>
                                <td>{pay.transactionId}</td>
                                <td>{pay.description}</td>
                                <td>{pay.category}</td>
                                <td style={{ color: textColor[index] }}>{pay.amount}</td>
                            </tr>
                        ))}
            		</tbody>

                       
                </table>
            </div>
            
    </div>
    </>
    
  )
}

export default RecentOrders




