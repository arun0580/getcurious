import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nfonics.solutions@gmail.com",
    pass: "mhnruvatarljopbg", // Use your Gmail App Password
  },
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px;">
        <div style="max-width: 500px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 2px 8px #eee; padding: 24px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://curioustogether.org/assets/images/logo.png" alt="Logo" style="height: 40px; margin-bottom: 10px;" />
            <h3 style="color: #98bb3c; margin: 0;">Contact Request</h3>
            <p style="color: #565656; font-size: 15px; margin-top: 8px;">
              You have received a new message via GetCurios Together.
            </p>
          </div>
          <table style="width: 100%; font-size: 15px; color: #222; margin-bottom: 10px;">
            <tr>
              <td style="font-weight: bold; width: 100px;">Name:</td>
              <td>${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Email:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; vertical-align: top;" colspan="2">Message:</td>    
            </tr>
             <tr>        
              <td style="white-space: pre-line;" colspan="2">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; text-align: center; color: #aaa; font-size: 12px;">
            &copy; ${new Date().getFullYear()} GetCurios Together
          </div>
        </div>
      </div>
    `;
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "arun.raj@nfonics.com",
      subject: "GetCurios | Contact Request",
      text: message,
      html,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
