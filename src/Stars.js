import React, { useState } from 'react';
import { Typography, Rate, Card, Button } from 'antd';
import NetlifyForm from 'react-netlify-form';

const { Text } = Typography;

const Stars = ({ setActive }) => {
	const [rating, setRating] = useState(null);

	return (
		<NetlifyForm name="rating">
			{({ loading, error, success }) => {
				if (error || success) setActive('Feedback');
				return (
					<div>
						{!loading && !success && (
							<div>
								<Card
									style={{ marginBottom: 35 }}
									bodyStyle={{ textAlign: 'center' }}
								>
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
								<Button
									htmlType="submit"
									size="large"
									type="primary"
									loading={loading}
									block
								>
									Submit Feedback
								</Button>
							</div>
						)}
					</div>
				);
			}}
		</NetlifyForm>
	);
};

export default Stars;
