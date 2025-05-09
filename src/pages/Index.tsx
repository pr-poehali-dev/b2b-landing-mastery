
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: ''
  });

  const [binaryLines, setBinaryLines] = useState<string[]>([]);

  // Generate random binary strings for the animation effect
  useEffect(() => {
    const generateBinary = () => {
      const lines = [];
      for (let i = 0; i < 20; i++) {
        let line = '';
        for (let j = 0; j < 30; j++) {
          line += Math.round(Math.random()) === 1 ? '1' : '0';
        }
        lines.push(line);
      }
      return lines;
    };

    setBinaryLines(generateBinary());
    
    const interval = setInterval(() => {
      setBinaryLines(generateBinary());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Would connect to backend API for form submission
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в течение 24 часов.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix Digital Rain Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {binaryLines.map((line, i) => (
          <div 
            key={i} 
            className="absolute text-xs text-purple-400 font-mono animate-float"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <header className="relative z-10 container mx-auto px-4 py-16 md:py-28 flex flex-col items-center text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0 cyberpunk-grid"></div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-text-glow relative z-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">10 000 горячих контактов клиентов</span> + 
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"> гарантия выручки от 5 000 000₽</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl relative z-10 text-purple-200">
          Получайте только тех, кто уже ищет ваш продукт. 
          Без рисков — мы отвечаем за ваш результат
        </p>
        
        <div className="relative w-full max-w-3xl h-48 md:h-64 mb-10 z-10">
          <Card className="absolute inset-0 overflow-hidden bg-black/40 backdrop-blur-sm border-purple-600 border">
            <CardContent className="p-6 flex items-center justify-center h-full">
              <div className="w-3/4 h-3/4 relative">
                {/* Digital Matrix style Graph visualization */}
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="w-1/6 h-[20%] bg-purple-900/50 border border-purple-400 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[35%] bg-purple-900/50 border border-purple-400 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[30%] bg-purple-900/50 border border-purple-400 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[60%] bg-purple-900/50 border border-purple-400 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[50%] bg-purple-900/50 border border-purple-400 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[90%] bg-purple-500/60 border border-purple-300 rounded-t-md mx-0.5 animate-pulse"></div>
                </div>
                
                <div className="absolute top-2 right-0 flex items-center">
                  <span className="text-purple-300 font-mono mr-2">5 000 000₽</span>
                  <div className="ml-2 flex items-center justify-center bg-purple-600/70 rounded-full w-8 h-8 border border-purple-300 animate-pulse">
                    <Icon name="Shield" size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Button 
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold text-lg px-8 py-6 border border-purple-400 animate-pulse transition duration-300 neon-shadow" 
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="mr-2">{'>'}</span>Запустить поток клиентов уже сегодня
        </Button>
      </header>

      {/* Advantages Section */}
      <section className="relative z-10 bg-black py-16 border-t border-b border-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-black/50 border border-purple-700 rounded-lg transition duration-300 hover:border-purple-400 hover:bg-black/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/70 mb-4 border border-purple-400">
                <Icon name="Users" size={32} className="text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Не клики, а реальные контакты</h3>
              <p className="text-gray-400">10 000 номеров тех, кто уже интересуется вашим продуктом</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-black/50 border border-purple-700 rounded-lg transition duration-300 hover:border-purple-400 hover:bg-black/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/70 mb-4 border border-purple-400">
                <Icon name="Crown" size={32} className="text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Эксклюзивность</h3>
              <p className="text-gray-400">Работаем только с одной компанией в вашей нише</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-black/50 border border-purple-700 rounded-lg transition duration-300 hover:border-purple-400 hover:bg-black/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/70 mb-4 border border-purple-400">
                <Icon name="Headphones" size={32} className="text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Полное сопровождение</h3>
              <p className="text-gray-400">От скриптов до анализа звонков</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="relative z-10 bg-black/80 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Наши гарантии</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/80 p-6 rounded-lg flex flex-col items-center text-center border border-purple-700 hover:border-purple-400 neon-box transition duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-800 mb-4 border border-purple-400">
                <Icon name="BadgePercent" size={24} className="text-purple-200" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">
                5 000 000₽ выручки — или мы вернем разницу
              </h3>
              <p className="text-gray-400">Мы уверены в нашем продукте и гарантируем результат</p>
            </div>
            <div className="bg-black/80 p-6 rounded-lg flex flex-col items-center text-center border border-purple-700 hover:border-purple-400 neon-box transition duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-800 mb-4 border border-purple-400">
                <Icon name="ShieldCheck" size={24} className="text-purple-200" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">
                Юридическая безопасность
              </h3>
              <p className="text-gray-400">Все данные проверены по 152-ФЗ</p>
            </div>
            <div className="bg-black/80 p-6 rounded-lg flex flex-col items-center text-center border border-purple-700 hover:border-purple-400 neon-box transition duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-800 mb-4 border border-purple-400">
                <Icon name="BadgeDollarSign" size={24} className="text-purple-200" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">
                Цена контакта — 52₽
              </h3>
              <p className="text-gray-400">Платите только за результат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 bg-black/80 py-16 border-t border-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Дополнительные услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start bg-black/60 p-6 rounded-lg border border-purple-800 hover:border-purple-500 transition duration-300">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-900 border border-purple-400">
                  <Icon name="Database" size={20} className="text-purple-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Индивидуальная CRM</h3>
                <p className="text-gray-400">Обучение сотрудников, гибкие сценарии общения</p>
              </div>
            </div>
            <div className="flex items-start bg-black/60 p-6 rounded-lg border border-purple-800 hover:border-purple-500 transition duration-300">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-900 border border-purple-400">
                  <Icon name="Phone" size={20} className="text-purple-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Прозвон клиентов</h3>
                <p className="text-gray-400">Доступен как дополнительная опция</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="relative z-10 bg-black py-16">
        <div className="cyberpunk-grid absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Запустить поток клиентов уже сегодня
            </h2>
            <p className="text-center mb-8 text-purple-200">
              Оставьте заявку — и мы подготовим персональную стратегию за 24 часа
            </p>
            <form onSubmit={handleSubmit} className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-purple-600 neon-box">
              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  className="bg-black text-purple-300 placeholder:text-purple-500/50 border-purple-700 focus:border-purple-400"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  className="bg-black text-purple-300 placeholder:text-purple-500/50 border-purple-700 focus:border-purple-400"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-6">
                <Input
                  type="text"
                  name="company"
                  placeholder="Название компании"
                  className="bg-black text-purple-300 placeholder:text-purple-500/50 border-purple-700 focus:border-purple-400"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-purple-800 hover:bg-purple-700 text-white font-bold text-lg py-6 border border-purple-400 transition duration-300 neon-shadow"
              >
                <span className="mr-2">{'>'}</span>Оставить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black py-8 border-t border-purple-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">B2B Leads</div>
              <div className="text-sm text-gray-400">
                Работаем строго в рамках закона. Все согласия клиентов подтверждены.
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center mb-2">
                <Icon name="Phone" size={16} className="mr-2 text-purple-400" />
                <a href="tel:+78001234567" className="text-purple-300 hover:text-purple-400 transition">+7 (800) 123-45-67</a>
              </div>
              <div className="flex items-center">
                <Icon name="Send" size={16} className="mr-2 text-purple-400" />
                <a href="https://t.me/b2bleads" className="text-purple-300 hover:text-purple-400 transition">Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating digital artifacts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-5 top-10 w-10 h-10 rounded-full bg-purple-600/20 animate-pulse"></div>
        <div className="absolute right-10 top-32 w-20 h-1 bg-purple-400/30 animate-pulse"></div>
        <div className="absolute left-1/4 bottom-1/4 w-5 h-16 bg-purple-500/20 animate-pulse"></div>
        <div className="absolute right-1/3 top-2/3 w-24 h-2 bg-purple-400/20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Index;
