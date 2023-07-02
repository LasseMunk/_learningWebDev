import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // will enable url/about
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLinks from "./components/AboutIconLinks";

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						{/* only show index when it matches exactly url/ not e.g. url/about */}
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>

						<Route path='/about' element={<AboutPage />} />
					</Routes>

					<AboutIconLinks />
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
