import PropTypes from "prop-types";

function EmpolyeeCard({name, department, salary}){
    return(
        <div>
            <h3>{name}</h3>
            <p>Department: {department}</p>
            <p>Salary: {salary}</p>
        </div>
    );
}

EmpolyeeCard.propTypes = {
    name: PropTypes.string,
    department: PropTypes.string,
    salary: PropTypes.number,
};

export default EmpolyeeCard;