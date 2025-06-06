import { div } from 'framer-motion/client';
import React from 'react';

const UGProgramsTable = ({ data, category }) => {
  
 // Step 1: Filter data by UG or PG category
  const filteredData = data.filter(course => course.category === category);

  // Step 2: Group filtered data by department
  const groupedByDepartment = filteredData.reduce((acc, course) => {
    const dept = course.department?.trim() || 'Unspecified Department';
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(course);
    return acc;
  }, {});

  return (
    <div className='ug-program-table'>

        <div className="table-container">
      <table className="ug-programs-table">
        <thead>
          <tr className='header'>
            <th>Course</th>
            <th>Duration</th>
            <th>Eligibility</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedByDepartment).map(([departmentName, courses]) => (
            <React.Fragment key={departmentName}>
              <tr className="category-row">
                <td className='cat-heading' colSpan="3">{departmentName}</td>
              </tr>
              {courses.map((program, i) => (
                <tr key={i}>
                  <td className='items'>{program.name}</td>
                  <td className='items'>{program.fees[0].courseDuration}</td>
                  <td className='items'>{program.fees[0].feePerYear}</td>
                  
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UGProgramsTable;
