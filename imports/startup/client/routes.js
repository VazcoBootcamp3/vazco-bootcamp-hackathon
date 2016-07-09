import { Meteor } from 'meteor/meteor'

import App from '/imports/ui/containers/App'
import CreateEventPage from '/imports/ui/pages/CreateEventPage'

export default {
  path: '/',
  component: App,
  indexRoute: { component: CreateEventPage, },
  childRoutes: [],
}
