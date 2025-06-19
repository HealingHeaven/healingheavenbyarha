import Grid from "./Grid";
import OurServices from "./OurServices";

const ServiceCard = () => {
  return (
    <div className="flex justify-center flex-col items-center lg:my-20 gap-10" id="services">
      <OurServices />
    </div>
  );
};

export default ServiceCard;