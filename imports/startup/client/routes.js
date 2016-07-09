import { Meteor } from 'meteor/meteor'

import App from '/imports/ui/containers/App'
import EventPage from '/imports/ui/pages/EventPage'
import CreateEventPage from '/imports/ui/pages/CreateEventPage'
import ManageEventPage from '/imports/ui/pages/ManageEventPage'

const indexRedirect = (_, replace) => {
  replace('/admin/events/new')
}

export default {
  path: '/',
  component: App,
  indexRoute: { onEnter: indexRedirect, },
  childRoutes: [
    {
      path: 'events',
      childRoutes: [
        { path: ':eventId', component: EventPage, },
      ],
    },
    {
      path: 'admin',
      childRoutes: [
        {
          path: 'events',
          childRoutes: [
            { path: 'new', component: CreateEventPage, },
            { path: ':eventId', component: ManageEventPage, },
          ],
        },
      ],
    },
  ],
}
