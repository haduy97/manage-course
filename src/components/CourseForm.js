import React from 'react';


const CourseForm = (props) => {
    const {courseInfo, _onChange, _onAdd} = props
    return (
        <form>
            <div className="form-group">
                <label>Title</label>
                <div className="field">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={_onChange}
                        value={courseInfo.title}
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Author</label>
                <div className="field">
                    <select
                        name="authorId"
                        value={courseInfo.authorId}
                        onChange={_onChange}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Hà Duy</option>
                        <option value="2">Ngọc Ngạn</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label>Category</label>
                <div className="field">
                    <input
                        type="text"
                        name="category"
                        className="form-control"
                        onChange={_onChange}
                        value={courseInfo.category}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary" onClick={_onAdd} >Save</button>
        </form>
    );
};

export default CourseForm;