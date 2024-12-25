import { v4 as uuid } from "uuid";
import {FaAngleDoubleRight}  from 'react-icons/fa'
const Duties = ({duties}) => {

    console.log(" duties :", duties);

    return <div className="duties-item">
        {
            duties.map((item, index) => {
                const id = uuid();
                return <div key={id} className='job-desc'>
                     <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                    <p>{item}</p>
                </div>
            })
        }
    </div>
}

export default Duties;