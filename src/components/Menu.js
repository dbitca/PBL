import "../style/Menu.css";
import {
    Link
    } from 'react-router-dom'
const Menu = ({menu}) => {

return(<div class="main">
<nav className="navigation">
   <ul>
       {
           menu.map(e=>{
               return (
                <li key={e.url}><Link className="menu-url" to={e.url}>{e.name}</Link></li>

               )
           })
       }
      
   </ul> 
</nav>
</div>);
}

export default Menu;