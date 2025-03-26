import { Navigate, Route, Routes } from 'react-router-dom';

import CoursesList from '../pages/CoursesList';
import CoursesCart from '../pages/CoursesCart';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import AddCourse from '../pages/AddCourse';
import CourseDetails from './CourseDetails';
import EditCourse from '../pages/EditCourse';
import ProtectedRoute from './ProtectedRoute';
import Checkout from '../pages/Checkout';


const Router = () => {
    return (
        <Routes>
            <Route path="coursesList" element={<CoursesList />} >
                <Route path="details/:id" element={<CourseDetails />} />
            </Route>
            <Route path="signUp" element={<SignUp />} />
            <Route path="coursesCart" element={
                <ProtectedRoute role={"USER"} to={"coursesList"} needUserIn={false}>
                    <CoursesCart />
                </ProtectedRoute>
            }>
                <Route path="details/:id" element={<CourseDetails />} />
            </Route>
            <Route path="logIn" element={<LogIn />} />
            <Route path="addCourse" element={
                <ProtectedRoute role={"ADMIN"} to={"coursesList"}>
                    <AddCourse />
                </ProtectedRoute>
            } />
            <Route path="editCourse" element={
                <ProtectedRoute role={"ADMIN"} to={"coursesList"}>
                    <EditCourse />
                </ProtectedRoute>
            } />

            <Route path="checkOut" element={
                <ProtectedRoute role={"USER"} to={"/logIn"}>
                    <Checkout />
                </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/coursesList" replace />} />
        </Routes>);
}

export default Router;
