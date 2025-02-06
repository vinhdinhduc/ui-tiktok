import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import React from 'react';
import Following from './Page/Following';
import DefaultLayout from './components/Layout/DefaultLayout';
import Header from './components/Layout/DefaultLayout/component/Header';
function App() {
    return (
        <Router>
            <div className="App"></div>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                <Route path="/following" element={<Following />} />
            </Routes>
        </Router>
    );
}

export default App;
