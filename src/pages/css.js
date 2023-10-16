import Image from 'next/image';
//import searchIcon from "~\\public\\assets\\desktop\\logo.svg";

const List = () => {
  return (
            <ul className="list-style">
                <li className="list-item-style secondary-color-dark-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li className="list-item-style secondary-color-dark-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li className="list-item-style secondary-color-dark-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            </ul>
  )
}
const OrderedList = () => {
  return (
            <ol className="list-style">
                <li className="list-item-style secondary-color-dark-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li className="list-item-style secondary-color-dark-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li className="list-item-style secondary-color-dark-gray">Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
            </ol>
  )
}
const CheckBox = () => {
  return (
          <input  type='checkbox'/>
  )
}
export default function test(){
    return(
        <>
            <h1>Jived fox nymph grabs quick waltz</h1>
            <h2>Jived fox nymph grabs quick waltz</h2>
            <h3>Jived fox nymph grabs quick waltz</h3>
            <h4>Jived fox nymph grabs quick waltz</h4>
            <p class="">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. 
            </p>
            <List/>
            <OrderedList/>
            <button className="primary-button">Button 1</button>
            <button className="secondary-button">Button 2</button>
            <div className='search-field'>
                <Image
                    priority
 //                   src={searchIcon}
                    height={24}
                    width={24}
                    alt="search icon"
                    />
                <input type="text" id="name" name="name" size="20" placeholder="Enter your search"/>
            </div>
            <CheckBox/>
            <div>
  //              <button className="btn" >click</button>
            </div>
        </>
    )
}