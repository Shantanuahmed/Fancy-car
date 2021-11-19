import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import BookingId from './Pages/BookingId/BookingId';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Cars from './Pages/Cars/Cars';
import CarBooking from './Pages/CarBooking/CarBooking';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Payment from './Pages/Payment/Payment';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/payment">
              <Navigation></Navigation>
              <Payment></Payment>
            </Route>
            <Route path="/collection">
              <Navigation></Navigation>
              <Cars></Cars>
            </Route>
            <Route path="/dashboard">
              <Navigation></Navigation>
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/display/:displayId">
              <Navigation></Navigation>
              <BookingId></BookingId>
            </PrivateRoute>
            <PrivateRoute path="/cars/:carId">
              <Navigation></Navigation>
              <CarBooking></CarBooking>
            </PrivateRoute>
            <Route path="/login">
              <Navigation></Navigation>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Navigation></Navigation>
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
