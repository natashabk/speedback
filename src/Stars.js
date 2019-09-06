import React, { useState } from 'react';
import { Typography, Rate, Card } from 'antd';
import NetlifyForm from 'react-netlify-form';

const { Text } = Typography;

const Stars = () => {
	const [rating, setRating] = useState(null);

	return (
		<NetlifyForm name="rating">
			{({ loading, error, success }) => (
				<div>
					{!loading && !success && (
						<div>
							<Card bodyStyle={{ textAlign: 'center' }}>
								<Text strong>Rate this session</Text>
								<Rate
									style={{ width: '100%' }}
									onChange={val => setRating(val)}
								/>
							</Card>
							<input
								type="text"
								name="stars"
								value={rating}
								style={{ display: 'none' }}
							/>
							<button id="submit">Submit Feedback</button>
						</div>
					)}
				</div>
			)}
		</NetlifyForm>
	);
};

export default Stars;
