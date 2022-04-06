import {ReactComponent as Arrow} from 'assets/img/LeftArrow.svg';
import './styles.css';

function Pagination() {

    return (
        <div className="esmovie-pagination-container">
            <div className="esmovie-pagination-box">
                <button className="esmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="esmovie-pagination-button" disabled={false} >
                    <Arrow className="esmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;