import { useState } from 'react';
import { Eye, Sparkles, MessageCircle, Lightbulb } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "You're scrolling through social media. What catches your eye first?",
    options: [
      { text: "Trends and patterns in what everyone's posting", trait: "spotter", score: 3 },
      { text: "Predictions about what'll be popular next", trait: "predictor", score: 3 },
      { text: "Stories that make you feel something", trait: "teller", score: 3 },
      { text: "Life hacks and clever solutions", trait: "solver", score: 3 }
    ]
  },
  {
    id: 2,
    question: "Your friend asks for restaurant recommendations. You:",
    options: [
      { text: "Notice which places they always enjoy", trait: "spotter", score: 2 },
      { text: "Guess what new place they'd love", trait: "predictor", score: 2 },
      { text: "Tell them the story of your favorite meal there", trait: "teller", score: 2 },
      { text: "Figure out the perfect spot based on their mood", trait: "solver", score: 2 }
    ]
  },
  {
    id: 3,
    question: "When planning a trip, you get excited about:",
    options: [
      { text: "Finding hidden gems others might miss", trait: "spotter", score: 2 },
      { text: "Anticipating which activities you'll love most", trait: "predictor", score: 2 },
      { text: "Imagining the memories you'll make", trait: "teller", score: 2 },
      { text: "Optimizing the perfect itinerary", trait: "solver", score: 2 }
    ]
  },
  {
    id: 4,
    question: "At a party, you're the one who:",
    options: [
      { text: "Notices connections between people", trait: "spotter", score: 2 },
      { text: "Knows who would get along great", trait: "predictor", score: 2 },
      { text: "Gets everyone laughing with great stories", trait: "teller", score: 2 },
      { text: "Suggests the perfect game or activity", trait: "solver", score: 2 }
    ]
  },
  {
    id: 5,
    question: "Your perfect superpower would be:",
    options: [
      { text: "See invisible connections everywhere", trait: "spotter", score: 3 },
      { text: "Know what happens next", trait: "predictor", score: 3 },
      { text: "Make anyone understand anything", trait: "teller", score: 3 },
      { text: "Instantly solve any puzzle", trait: "solver", score: 3 }
    ]
  }
];

const profiles = {
  spotter: {
    title: "The Pattern Spotter",
    icon: Eye,
    color: "from-purple-400 to-pink-500",
    emoji: "🔍",
    description: "You have a gift for seeing connections others miss! You naturally spot trends, notice similarities, and find the hidden patterns in everyday chaos.",
    realWorld: "Netflix uses pattern spotting to group shows you might like. Spotify finds songs with similar vibes. You do this with people and ideas!",
    dataScience: "Pattern recognition is the foundation of machine learning! Algorithms look for patterns in data just like you spot them in life.",
    funFact: "About 30% of people are natural pattern spotters!"
  },
  predictor: {
    title: "The Future Predictor",
    icon: Sparkles,
    color: "from-blue-400 to-cyan-500",
    emoji: "🔮",
    description: "You're amazing at seeing what's coming next! You anticipate trends, predict outcomes, and always seem to know what someone needs before they ask.",
    realWorld: "Weather apps predict rain. Amazon predicts what you'll buy. Your brain does this naturally by learning from past experiences!",
    dataScience: "Prediction models power everything from stock markets to sports betting. They learn from history to forecast the future!",
    funFact: "Your brain makes thousands of predictions per second!"
  },
  teller: {
    title: "The Story Teller",
    icon: MessageCircle,
    color: "from-orange-400 to-red-500",
    emoji: "📖",
    description: "You make complex things simple and boring things fascinating! You have a natural talent for explaining ideas and making people care about information.",
    realWorld: "Infographics, TED talks, and viral videos all use storytelling to make data memorable. Numbers alone are boring—stories stick!",
    dataScience: "Data visualization and communication are crucial! The best insights mean nothing if you can't explain them to others.",
    funFact: "Stories are 22x more memorable than facts alone!"
  },
  solver: {
    title: "The Problem Solver",
    icon: Lightbulb,
    color: "from-green-400 to-emerald-500",
    emoji: "💡",
    description: "You love figuring things out! You approach challenges logically, find creative solutions, and get a thrill from cracking tough problems.",
    realWorld: "Google Maps solves 'fastest route' problems. Spell check solves typo problems. Your brain is always running these mini-algorithms!",
    dataScience: "Optimization algorithms solve everything from delivery routes to game strategies. They test possibilities to find the best answer!",
    funFact: "Your brain uses similar logic to AI when solving puzzles!"
  }
};

export default function DataSuperpowerQuiz() {
  const [stage, setStage] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ spotter: 0, predictor: 0, teller: 0, solver: 0 });
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setStage('quiz');
  };

  const handleAnswer = (trait, score) => {
    const newScores = { ...scores, [trait]: scores[trait] + score };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const maxScore = Math.max(...Object.values(newScores));
      const winner = Object.keys(newScores).find(key => newScores[key] === maxScore);
      setResult(winner);
      setStage('result');
    }
  };

  const handleRestart = () => {
    setStage('welcome');
    setCurrentQuestion(0);
    setScores({ spotter: 0, predictor: 0, teller: 0, solver: 0 });
    setResult(null);
  };

  if (stage === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center">
          <div className="text-6xl mb-4">🦸‍♀️</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            What's Your Data Superpower?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover your unique way of understanding the world! No coding or math required—just answer honestly.
          </p>
          <div className="flex justify-center gap-4 mb-8 text-4xl">
            <span>🔍</span>
            <span>🔮</span>
            <span>📖</span>
            <span>💡</span>
          </div>
          <button
            onClick={handleStart}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-2xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Discover Your Power
          </button>
          <p className="text-sm text-gray-500 mt-6">Takes less than 2 minutes!</p>
        </div>
      </div>
    );
  }

  if (stage === 'quiz') {
    const question = questions[currentQuestion];
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl w-full">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-purple-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex gap-2">
                {questions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 w-12 rounded-full transition-all ${
                      idx <= currentQuestion ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{question.question}</h2>
          </div>
          <div className="space-y-4">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.trait, option.score)}
                className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all text-lg font-medium text-gray-700 hover:text-purple-700 hover:shadow-md"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'result' && result) {
    const profile = profiles[result];
    const Icon = profile.icon;
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl w-full">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">{profile.emoji}</div>
            <div className={`inline-block p-6 rounded-full bg-gradient-to-br ${profile.color} mb-6`}>
              <Icon className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              {profile.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {profile.description}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6 border-2 border-blue-200">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>🌍</span> You Do This In Real Life:
            </h3>
            <p className="text-gray-700">
              {profile.realWorld}
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6 border-2 border-purple-200">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>🤖</span> The Data Science Connection:
            </h3>
            <p className="text-gray-700">
              {profile.dataScience}
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
            <p className="text-lg text-gray-700">
              <span className="font-bold">✨ Fun Fact:</span> {profile.funFact}
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-5 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-green-700">🧠 How this quiz works:</span> Each answer adds "points" 
              to different superpowers. At the end, we find your highest score using a max function—the same way 
              Spotify picks your #1 genre or Instagram finds your most-liked post type!
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return null;
}
