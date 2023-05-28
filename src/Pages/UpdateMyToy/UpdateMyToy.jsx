/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import Modal from "react-bootstrap/Modal";



const UpdateMyToy = (props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { handleToyUpdate } = props;
    console.log(props);
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    className="text-center w-100 m-auto"
                    id="contained-modal-title-vcenter"
                >
                    Update Toy
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form
                    className="container text-center"
                    onSubmit={handleSubmit(handleToyUpdate)}
                >
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input
                        className="text-input"
                        {...register("name")}
                        placeholder="name"
                        defaultValue={props?.toy?.name}
                    />
                    <input
                        className="text-input d-none"
                        {...register("_id")}
                        value={props?.toy?._id}
                    />

                    <input
                        className="text-input"
                        {...register("available_quantity", { required: true })}
                        placeholder="available_quantity"
                        defaultValue={props?.toy?.available_quantity}
                    />
                    <input
                        className="text-input"
                        {...register("rating", { required: true })}
                        placeholder="rating"
                        defaultValue={props?.toy?.rating}
                    />
                    <input
                        className="text-input shadow-lg"
                        {...register("sub_category")}
                        placeholder="sub_category"
                        defaultValue={props?.toy?.sub_category}

                    />

                    <input
                        className="text-input"
                        {...register("picture")}
                        placeholder="image link"
                        type="url"
                        defaultValue={props?.toy?.picture}
                    />
                    <input
                        className="text-input"
                        {...register("price")}
                        placeholder="price"
                        type="number"
                        defaultValue={props?.toy?.price}
                    />

                       <input
                            className="text-input shadow-lg w-25 h-25"
                            {...register("detail_description")}
                            placeholder="detail_description"
                            defaultValue={props?.toy?.detail_description}
                        />
                    <input className="submit-btn" value="Update Toy" type="submit" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                {/* <button className="bg-danger">Update</button> */}
            </Modal.Footer>
        </Modal>

    );
};

export default UpdateMyToy;


