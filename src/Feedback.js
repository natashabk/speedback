import React from 'react';
import NetlifyForm from 'react-netlify-form';

const Feedback = () => {
	return (
		<NetlifyForm name="feedback">
			{({ loading, error, success }) => (
				<div>
					{loading && <div>Loading...</div>}
					{error && (
						<div>
							<p> Your feedback was not sent. Please try again later.</p>
						</div>
					)}
					{success && (
						<div>
							<p>Your feedback has been sent. Thanks for playing!</p>
						</div>
					)}
					{!loading && !success && (
						<div>
							<textarea
								name="who-goes-first"
								placeholder="Ex: The person with the fastest car."
								rows={4}
							/>
							<textarea
								name="odd-one-out"
								placeholder="Ex: Draw a hybrid of the first two animals you can think of."
								rows={4}
							/>
							<textarea
								name="other-comments"
								placeholder="Any praise/complaints/ideas?"
								rows={4}
							/>
							<button id="submit">Submit Feedback</button>
						</div>
					)}
				</div>
			)}
		</NetlifyForm>
	);
};

export default Feedback;
