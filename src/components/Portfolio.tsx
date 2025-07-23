import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Code, 
  GraduationCap,
  Star,
  Sparkles,
  Coffee,
  Users
} from "lucide-react";

const Portfolio = () => {
  const [activeStory, setActiveStory] = useState(0);

  const personalInfo = {
    name: "서희재",
    birth: "1997년 2월 19일",
    zodiac: "소띠",
    gender: "남자",
    religion: "무교",
    mbti: "ENFJ",
    drink: "2.5병 (컨디션 좋으면 3병까지)",
    motto: "놀 땐 놀고 할 땐 하자",
    relationship: "무"
  };

  const timeline = [
    {
      period: "중학교 시절",
      title: "울산 북구의 수재",
      description: "울산 북구에서 쭉 살다가 수재라는 소리를 들으며 중학교에서 공부로 입지가 있었음",
      icon: "🎓",
      color: "from-blue-400 to-purple-500"
    },
    {
      period: "고등학교",
      title: "소림축구의 감명",
      description: "소림축구에 감명을 받아 울산 외국어 고등학교 중국어과에 입학. 하지만 외국어에 소질이 없어 수능을 아랍어로 보게 되었고, 공대로 진로를 변경",
      icon: "🥋",
      color: "from-orange-400 to-red-500"
    },
    {
      period: "대학 시절",
      title: "학업과 학생회 활동",
      description: "열심히 학생회도 하고 학업생활을 하며 성장하는 시기",
      icon: "📚",
      color: "from-green-400 to-blue-500"
    },
    {
      period: "군대",
      title: "8사단 오뚜기 부대",
      description: "대명문 8사단 오뚜기 부대 수색대에 입대. 격투기 선수 맞선임을 맞이하게 되어 겸손함을 많이 배우게 되는 계기가 됨",
      icon: "🎖️",
      color: "from-gray-600 to-gray-800"
    },
    {
      period: "서울 생활",
      title: "개발자의 꿈",
      description: "남자는 죽기전에 상경을 해서 꿈을 꾸어보아야 한다는 야심찬 목표로 서울 SI 회사에 취업. 2년동안 웹, 앱 가리지 않고 열심히 살았음",
      icon: "💻",
      color: "from-purple-400 to-pink-500"
    },
    {
      period: "현재",
      title: "울산대학교병원",
      description: "울산대학교병원에서 좋은 서비스를 만들기 위해 열심히 노력하며 새로운 시작",
      icon: "🏥",
      color: "from-teal-400 to-blue-500"
    }
  ];

  const skills = [
    { name: "웹 개발", level: 90, color: "bg-blue-500" },
    { name: "앱 개발", level: 85, color: "bg-purple-500" },
    { name: "데이터 설계", level: 80, color: "bg-green-500" },
    { name: "고객 서비스", level: 95, color: "bg-orange-500" },
    { name: "팀워크", level: 90, color: "bg-pink-500" },
    { name: "겸손함", level: 100, color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-yellow-300 rounded-full magical-float"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-20 w-5 h-5 bg-purple-300 rounded-full magical-float" style={{animationDelay: "2s"}}></div>
        </div>
        
        <div className="text-center z-10 bounce-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-6xl border-4 border-white/30 magical-glow">
              🐂
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-white/90 mb-2">개발자의 마법같은 여정</p>
            <p className="text-lg text-white/80 italic">"{personalInfo.motto}"</p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button 
              variant="soft" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
            >
              <Sparkles className="mr-2" />
              내 이야기 보기
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('journey')?.scrollIntoView({behavior: 'smooth'})}
            >
              <Star className="mr-2" />
              여정 따라가기
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            ✨ 나에 대한 이야기 ✨
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(personalInfo).map(([key, value], index) => (
              <Card key={key} className="story-card fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">
                    {key === 'name' && '👤'}
                    {key === 'birth' && '🎂'}
                    {key === 'zodiac' && '🐂'}
                    {key === 'gender' && '♂️'}
                    {key === 'religion' && '🙏'}
                    {key === 'mbti' && '🧠'}
                    {key === 'drink' && '🍺'}
                    {key === 'motto' && '💭'}
                    {key === 'relationship' && '💝'}
                  </div>
                  <h3 className="font-semibold text-primary mb-2 capitalize">
                    {key === 'name' && '이름'}
                    {key === 'birth' && '생년월일'}
                    {key === 'zodiac' && '띠'}
                    {key === 'gender' && '성별'}
                    {key === 'religion' && '종교'}
                    {key === 'mbti' && 'MBTI'}
                    {key === 'drink' && '주량'}
                    {key === 'motto' && '좌우명'}
                    {key === 'relationship' && '연애 상태'}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            🌟 인생의 마법같은 여정 🌟
          </h2>
          
          <div className="space-y-8">
            {timeline.map((story, index) => (
              <div
                key={index}
                className={`story-card p-8 cursor-pointer transition-all duration-500 ${
                  activeStory === index ? 'scale-105 ring-4 ring-primary/20' : ''
                }`}
                onClick={() => setActiveStory(index)}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${story.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                    {story.icon}
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3">
                      {story.period}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            💪 나의 마법 능력들 💪
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="story-card p-6 fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-primary">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Highlight */}
          <Card className="story-card p-8">
            <div className="text-center">
              <Code className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4 gradient-text">주요 프로젝트 경험</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">스마트스코어 골프 앱</h4>
                <p className="text-muted-foreground mb-4">
                  커뮤니티 파트를 데이터 설계부터 개발까지 완전히 담당하여 성공적으로 론칭한 프로젝트
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">데이터 설계</Badge>
                  <Badge variant="secondary">풀스택 개발</Badge>
                  <Badge variant="secondary">커뮤니티 시스템</Badge>
                  <Badge variant="secondary">골프 앱</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact & Future */}
      <section className="py-20 px-4 bg-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            🚀 새로운 시작, 울산대학교병원 🚀
          </h2>
          <div className="story-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-full p-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              3년의 서울 생활을 마무리하고, 이제 울산대학교병원에서 
              환자들과 의료진들을 위한 더 좋은 서비스를 만들기 위해 
              열심히 노력하겠습니다.
            </p>
            <p className="text-xl font-semibold text-primary mb-8">
              앞으로 잘 부탁드리겠습니다! ✨
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button variant="magical" size="lg">
                <Heart className="mr-2" />
                함께 성장해요
              </Button>
              <Button variant="soft" size="lg">
                <Coffee className="mr-2" />
                커피 한 잔 하실래요?
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;