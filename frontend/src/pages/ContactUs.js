import PaperHeader from '../components/PaperHeader';
import ContactDetails from '../components/ContactDetails';
import Map from '../components/Map';
import ExploreIcon from '@material-ui/icons/Explore';
const ContactUs = () => {
  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <PaperHeader data={{ icon: ExploreIcon, heading: 'Contact Us' }} />
      <ContactDetails />
      <div
        style={{
          width: '80%',
          margin: '2rem auto',
        }}
      >
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
