/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Blog.css'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    const [toggleState, setToggleState] = useState(1);
    useTitle('Blog');

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div>
            <h2 className='text-center my-5 text-muted fw-bolder'>Some Burning Question <span className='text-primary'>on React, Express & MongoDB</span></h2>
            <div className="container my-5">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        <p className='text-muted'>Question 1 </p>
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        <p className='text-muted'>Question 2 </p>
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        <p className='text-muted'>Question 3 </p>
                    </button>
                    <button
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}
                    >
                        <p className='text-muted'>Question 4 </p>
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h5 className='text-secondary my-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
                        <hr />
                        <p className='text-emphasis my-3'>
                            Both access token and refresh token use for authentication uprose which make API more secure. <br />
                            <span className='text-primary fw-bold'>Access token:</span>An access token is a credential that is used to access protected resources on an API or server.It is typically a short-lived token with an expiration time. <br />
                            The access token should be stored on the client-side in a secure manner, such as in memory or in a secure HTTP-only cookie. <br />
                            <span className='text-primary fw-bold'>Refresh token:</span>A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires.It is usually associated with an access token and is used to refresh the access token without requiring the user to reauthenticate. <br />
                            The refresh token should be stored securely on the client-side, ideally in a secure HTTP-only cookie or a local storage mechanism with appropriate security measures
                        </p>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h5 className='text-secondary my-2'>Compare SQL and NoSQL databases?</h5>
                        <hr />
                        <p className='text-emphasis my-3'>
                            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems, each with its own characteristics and use cases <br />
                            <span className='text-primary fw-bold'>SQL (Structured Query Language):</span>SQL databases use a structured data model known as a relational model. Data is organized into tables with predefined schemas, and relationships between tables are established. <br />
                            SQL databases are well-suited for applications that require structured data, complex queries, and transactions, such as financial systems, e-commerce platforms, and enterprise applications. <br />
                            <span className='text-primary fw-bold'> NoSQL (Not Only SQL):</span>NoSQL databases use various data models such as key-value, document, columnar, or graph. They offer more flexibility in data representation and allow for schemaless designs, making it easier to handle unstructured or semi-structured data. <br />
                            NoSQL databases are a good fit for applications dealing with large volumes of unstructured or rapidly changing data, such as content management systems, real-time analytics, social networks, and IoT (Internet of Things) applications.
                        </p>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h5 className='text-secondary my-2'>What is express js? What is Nest JS?</h5>
                        <hr />
                        <p className='text-emphasis my-3'>
                            Express.js and Nest.js are both popular web application frameworks for Node.js, but they have different approaches and features <br />
                            <span className='text-primary fw-bold'>Express.js:</span>It is a easier web application framework for Node.js. It provides a simple and flexible set of features for building web applications and APIs. <br />
                            Express.js provides a straightforward routing mechanism, enabling developers to define routes for different HTTP methods and handle requests and responses <br />
                            <span className='text-primary fw-bold'> Nest Js:</span>Nest.js is a TypeScript-based full-featured framework for building scalable and maintainable server-side applications. It is built on top of Express.js and adds additional features and architectural patterns. <br />
                            Nest.js promotes the use of decorators and TypeScript decorators to define routes, modules, controllers, and providers, providing a more structured and organized approach to building applications.
                        </p>
                    </div>
                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <h5 className='text-secondary my-2'>What is MongoDB aggregate and how does it work?</h5>
                        <hr />
                        <p className='text-emphasis my-3'>
                            The MongoDB aggregate method provides a powerful and flexible way to perform complex data aggregations and transformations on collections, making it a valuable tool for analyzing data within MongoDB. <br />
                            <span className='text-primary fw-bold'>MongoDB aggregate:</span>MongoDB agree get is a such a process by using aggregate we can easily filter, find, sort and limit teh data access from the API. <br />
                            Each stage in the pipeline can utilize various operators to manipulate and analyze the data.The MongoDB aggregate method provides a powerful and flexible way to perform complex data aggregations and transformations on collections, making it a valuable tool for analyzing data within MongoDB. <br />
                            <span className='text-primary fw-bold'> Working Process:</span>The aggregation framework in MongoDB offers several powerful features, including grouping and aggregating data, calculating fields, performing calculations across multiple collections, and joining documents based on specific conditions. <br />
                            It supports nested and multi-level grouping, allowing for complex aggregation scenarios.
                            The framework also provides functions like $sum, $avg, $max, $min, and $push for performing calculations and aggregations on grouped data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;