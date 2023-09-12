import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
	try {
		const hashedToken = await bcryptjs.hash(userId.toString(), 10);
		if (emailType === "VERIFY") {
			await User.findByIdAndUpdate(
				userId,
				{ verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 },
				{ new: true, runValidators: true }
			);
		} else if (emailType === "RESET") {
			await User.findByIdAndUpdate(
				userId,
				{
					forgotPasswordToken: hashedToken,
					forgotPasswordTokenExpiry: Date.now() + 3600000,
				},
				{ new: true, runValidators: true }
			);
		}

		var transport = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "f4363bca16018e",
				pass: process.env.EMAIL_PASS,
			},
		});
		const mailOptions = {
			from: "siddhant@gmail.com",
			to: email,
			subject:
				emailType === "VERIFY" ? "Verify your email" : "Reset your password",
			html: `<p>Click <a href="${
				process.env.domain
			}/verifyemail?token=${hashedToken}">here</a> ${
				emailType === "VERIFY" ? "verify your email" : "reset your password"
			} or copy and paste the link below in your browser <br> ${
				process.env.domain
			}/verifyemail?token=${hashedToken} </p>`,
		};

		const mailresponse = await transport.sendMail(mailOptions);
		return mailresponse;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
