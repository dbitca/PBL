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
                {e.subitems ? (
                  <>
                    <a className="menu-url">{e.name}</a>
                    <ul className="drop-down-items">
                      {e.subitems.map((item) => {
                        return (
                          <li key={e.url + item.url}>
                            <Link className="menu-url" to={item.url}>
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <Link className="menu-url" to={e.url}>
                    {e.name}
                  </Link>
                )}
              </li>
            );
          })}
          <li>
            <a>
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
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
