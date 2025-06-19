import step1 from '../assets/Frame 22.png'
import step2 from '../assets/Frame 22-1.png'
import step3 from '../assets/Frame 22-2.png'
import step4 from '../assets/Frame 22-3.png'


const steps = [
    {
        id: 1,
        title: "Fill the form below !",
        description: "Tell us about yourself, Start by sharing a few details with us so we can understand what you're going through and how best to help",
        imgSrc: step1
    },
    {
        id: 2,
        title: "Personal Review by Our Consultant",
        description: "Your details are personally reviewed Our expert consultant will carefully go through your form to understand your needs and prepare for your session.",
        imgSrc: step2,
    },
    {
        id: 3,
        title: "Booking Session",
        description: "Choose a time that works for you You’ll get a chance to select a session slot based on availability and your comfort.",
        imgSrc: step3,
    },
    {
        id: 4,
        title: "Begin Healing",
        description: "Start your wellness journey Join your 1-on-1 session with our dedicated consultant who is here to support and guide you.",
        imgSrc: step4,
    },
];

const Steps = () => {
    return (
        <section className="flex flex-col items-center text-center my-10 bg-gray-100 py-10">
            <h2 className="text-2xl font-bold tracking-wide mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl  mx-8">
                {steps.map((step) => (
                    <div key={step.id} className="flex justify-center items-center gap-8 py-5">
                        <img src={step.imgSrc} alt={`Step ${step.id}`} className="w-10 h-10" />
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Steps;