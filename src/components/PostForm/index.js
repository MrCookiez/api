import React from 'react';
import 'styled-components/macro';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import endpoint from '../../config/endpoint.json';
import styles from './styles';

const PostForm = ({ className }) => {
  const { register, handleSubmit, errors } = useForm();
  const postURL = `${endpoint.addPost}`;

  const uploadPost = (data) => (
    axios.post(postURL, data).then((res) => console.log(res)).catch((err) => console.log(err))
  );

  const onSubmit = (data) => uploadPost(data);

  return (
    <div css={styles}>
      <form className={`${className} form__wrapper`} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className="form__post__header">Title</label>
        <input name="title" type="text" ref={register({ required: true })} />

        <label htmlFor="author" className="form__post__author">Author</label>
        <input name="author" type="text" ref={register} />

        <label htmlFor="text" className="form__post__text">Text</label>
        <textarea name="text" type="text" ref={register({ required: true })} />

        {errors.header && <span>This field is required!</span>}
        <button label="Submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

PostForm.defaultProps = {
  className: '',
};

PostForm.propTypes = {
  className: PropTypes.string,
};

export default PostForm;
