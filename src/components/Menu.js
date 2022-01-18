import "../style/Menu.css";
import Notifications from "react-notifications-menu";
import { Link } from "react-router-dom";
const Menu = ({ menu }) => {
  const DEFAULT_NOTIFICATION = {
    image:
      "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
    message: "Notification one.",
    detailPage: "/events",
    receivedTime: "12h ago",
  };
  return (
    <div class="main">
      <nav className="navigation">
        <ul>
          {menu.map((e) => {
            return (
              <li key={e.url}>
                <Link className="menu-url" to={e.url}>
                  {e.name}
                </Link>
              </li>
            );
          })}
          <li>
            {" "}
            <Notifications
              data={[]}
              header={{
                title: "Notifications",
                option: {
                  text: "View All",
                  onClick: () => console.log("Clicked"),
                },
              }}
              markAsRead={(data) => {
                console.log(data);
              }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
