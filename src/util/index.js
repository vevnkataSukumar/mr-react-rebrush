import { useLocation, useNavigate } from 'react-router-dom';

// HOC to provide navigation and location
export const withRouter = (WrappedComponent) => {
    return (props) => {
      const navigate = useNavigate();
      const location = useLocation();
      
      return <WrappedComponent {...props} navigate={navigate} location={location} />;
    };
  };
