import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { SponsorList } from "./sponsor/SponsorList";
import { SponsorCreate } from "./sponsor/SponsorCreate";
import { SponsorEdit } from "./sponsor/SponsorEdit";
import { SponsorShow } from "./sponsor/SponsorShow";
import { VolunteerProfileList } from "./volunteerProfile/VolunteerProfileList";
import { VolunteerProfileCreate } from "./volunteerProfile/VolunteerProfileCreate";
import { VolunteerProfileEdit } from "./volunteerProfile/VolunteerProfileEdit";
import { VolunteerProfileShow } from "./volunteerProfile/VolunteerProfileShow";
import { ParticipantProfileList } from "./participantProfile/ParticipantProfileList";
import { ParticipantProfileCreate } from "./participantProfile/ParticipantProfileCreate";
import { ParticipantProfileEdit } from "./participantProfile/ParticipantProfileEdit";
import { ParticipantProfileShow } from "./participantProfile/ParticipantProfileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EventManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Sponsor"
          list={SponsorList}
          edit={SponsorEdit}
          create={SponsorCreate}
          show={SponsorShow}
        />
        <Resource
          name="VolunteerProfile"
          list={VolunteerProfileList}
          edit={VolunteerProfileEdit}
          create={VolunteerProfileCreate}
          show={VolunteerProfileShow}
        />
        <Resource
          name="ParticipantProfile"
          list={ParticipantProfileList}
          edit={ParticipantProfileEdit}
          create={ParticipantProfileCreate}
          show={ParticipantProfileShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
