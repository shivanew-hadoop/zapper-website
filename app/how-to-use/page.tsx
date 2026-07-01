import Image from "next/image";
const steps=[
["Download Zapper","Download the latest version from the Downloads page. Open your Downloads folder and double-click the Zapper v1.x.x.exe installer.","/howto/step1.png"],
["Windows Security Prompt","If Windows SmartScreen appears, click More info and then Run anyway. The application is safe. The first launch may take 30–45 seconds; later launches usually take less than 3 seconds.","/howto/step2.png"],
["Activate License","Open Zapper, click License, enter the Customer Email ID provided by the Zapper team, and click Activate.","/howto/step3.png"],
["Join Google Meet","Paste the Google Meet link shared by the host and click Join & Transcribe.","/howto/step4.png"],
["Start Live Transcription","After joining, request the host to admit you if required. Live captions will begin automatically once admitted.","/howto/step5.png"]
];
export default function Page(){return <main className="container section"><h1>How to Use Zapper</h1>{steps.map((s,i)=><div key={i} style={{margin:"40px 0"}}><h2>Step {i+1}: {s[0]}</h2><p>{s[1]}</p><Image src={s[2]} alt="" width={800} height={500}/></div>)}<h2>Need Assistance?</h2><p>Email: zapperapp.support@gmail.com<br/>Phone & WhatsApp: +91 9346073219</p><p>Thank you for choosing Zapper.</p></main>}