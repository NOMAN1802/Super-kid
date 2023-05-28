/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../providers/AuthProvider';
import Table from 'react-bootstrap/Table';
import UpdateMyToy from "../UpdateMyToy/UpdateMyToy";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);
    const [control, setControl] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    useTitle('My Toys');

    useEffect(() => {
        fetch(` https://super-kid-server.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyToy(data);
            });
    }, [user, control]);

    console.log(myToy);

    const handleToyUpdate = (data) => {
        console.log(data);
        fetch(` https://super-kid-server.vercel.app/updateToy/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    {
                        setControl(!control) ||
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Toy updated successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })

                    }
                }
                console.log(result);
            });
    };

    const handleDelete = (id) => {
        console.log(id);
        fetch(` https://super-kid-server.vercel.app/deleteToy/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result?.deletedCount > 0) {
                    {
                        setControl(!control) ||
                        Swal.fire({
                            title: 'Do you want to Delete?',
                            showDenyButton: true,
                            showCancelButton: true,
                            confirmButtonText: 'Delete',
                            denyButtonText: `Don't deleted`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              Swal.fire('Deleted!', '', 'success')
                            } else if (result.isDenied) {
                              Swal.fire('Toy is not deleted', '', 'info')
                            }
                          })

                    }
                }
            });
    };

    return (
        <div className='container my-5'>
            <h2 className='text-center text-muted my-5'>My Toys</h2>

            <Table striped bordered hover className="container text-bg-secondary mb-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myToy?.map((toy, index) => (

                        <>

                            <tr>

                                <td>{index + 1}</td>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.sub_category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.available_quantity}</td>
                                <td>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Edit
                                    </Button>
                                    <UpdateMyToy
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        toy={toy}
                                        handleToyUpdate={handleToyUpdate}
                                    />
                                </td>
                                <td>
                                    {/* <button onClick={()=>handleDelete(user._id)} className='btn btn-danger'>Delete</
                                    button> */}

                                    <button className='btn btn-danger' onClick={() => handleDelete(toy?._id)}>Delete</button>
                                </td>
                            </tr>
                        </>
                    ))}

                </tbody>
            </Table>

        </div>
    );
};

export default MyToys;