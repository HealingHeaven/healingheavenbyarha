import step1 from '../assets/Frame 22.png'
import step2 from '../assets/Frame 22-1.png'
import step3 from '../assets/Frame 22-2.png'
import step4 from '../assets/Frame 22-3.png'


const steps = [
    {
        id: 1,
        title: "Fill the form below !",
        description: "Contact us to get to know about yourself, Help us Help you.",
        imgSrc: step1 // Change this to your number images
    },
    {
        id: 2,
        title: "Fill the form below !",
        description: "Contact us to get to know about yourself, Help us Help you.",
        imgSrc: step2,
    },
    {
        id: 3,
        title: "Fill the form below !",
        description: "Contact us to get to know about yourself, Help us Help you.",
        imgSrc: step3,
    },
    {
        id: 4,
        title: "Fill the form below !",
        description: "Contact us to get to know about yourself, Help us Help you.",
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