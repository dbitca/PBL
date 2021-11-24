import "../style/Menu.css";
import {
    Link
    } from 'react-router-dom'
const Menu = ({menu}) => {

return(<div class="main">
<nav class="navigation">
   <ul>
       {
           menu.map(e=>{
               return (
                <li><Link className="menu-url" to={e.url}>{e.name}</Link></li>

               )
           })
       }
      
   </ul> 
</nav>
</div>);
}

export default Menu;