/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './AllToys.css'
import { Table } from 'react-bootstrap';
import { FaEye, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle('All Toy');
    useEffect(() => {
        fetch(' https://super-kid-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [])
    const handleDetails = (_id) => {
        console.log('Clicked toy id:', _id);
    }
    const handleSearch = () => {
        fetch(` https://super-kid-server.vercel.app/findToysByName/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };
    return (
        <div className='container my-5'>
            <h2 className='text-center fw-bold text-muted my-5' >All toys</h2>
            <div className="search-box p-2 text-end">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1"
                />{" "}
                <button className='btn btn-warning' onClick={handleSearch}>Search</button>
            </div>
            <Table striped bordered hover className="container">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toys?.slice(0, 20).map((toy, index) => (
                        <>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{toy.name}</td>
                                <td>{toy.seller_name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.sub_category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.available_quantity}</td>

                                <td>
                                    <Link to={`/allToys/${toy._id}`}>
                                        <button className='btn btn-ghost' onClick={() => handleDetails(toy._id)}><FaEye></FaEye>  <small>  View Details</small></button>
                                    </Link>
                                </td>
                            </tr>
                        </>
                    ))}

                </tbody>
            </Table>
        </div>
    );
};

export default AllToys;