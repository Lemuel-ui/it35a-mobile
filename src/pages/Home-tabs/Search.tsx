import { IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router"
import { Route, Redirect } from "react-router";

const Home: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
      <IonTabBar slot="bottom">
        <IonToolbar>
          <IonTittle>Tabs</IonTittle>
        </IonToolbar>
        {/**/}
        {tab.map((item,index) =>(
          <IonTabButton key={index} tab={item.tab} href={item.url}>
            <Ionicon icon={item.icon} />
            <IonLabel>{item.name}</IonLabel>
          </IonTabButton>

        ))}
        </IonTabBar>
<IonRouterOutlet>
  <Route exact path="/app/home/feed" compnent={Feed} />
  <Route exact path="/app/home">
      <Redirect to="/app/home/feed"/>
  </Route>
  <Route exact path="/app/home/search" component={Search} />
  <Route exact path="/app/home/favorites" component={Favorites} />
</IonRouterOutlet>
</IonTabs>
</IonReactRouter>
  );
};