import React from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

const CourseList = (props) => {
    const { courses } = props
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(_course => {
                    return (
                        <tr key={_course.id}>
                            <td>
                                <Link to={"/" + _course.slug}>{_course.title}</Link>
                            </td>
                            <td>{_course.authorId}</td>
                            <td>{_course.category}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};
// Proptype chỉ kiểm tra cho dev
CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired
        })
    ).isRequired
}

export default CourseList;