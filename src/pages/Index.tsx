
import { useState } from 'react';
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 to-blue-500">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
          10 000 горячих контактов клиентов + 
          <span className="text-amber-300"> гарантия выручки от 5 000 000₽</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Получайте только тех, кто уже ищет ваш продукт. 
          Без рисков — мы отвечаем за ваш результат
        </p>
        <div className="relative w-full max-w-3xl h-48 md:h-64 mb-10">
          <Card className="absolute inset-0 overflow-hidden bg-white/10 backdrop-blur-sm border-none">
            <CardContent className="p-6 flex items-center justify-center h-full">
              <div className="w-3/4 h-3/4 relative">
                {/* Graph visualization */}
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="w-1/6 h-[20%] bg-blue-300 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[35%] bg-blue-300 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[30%] bg-blue-300 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[60%] bg-blue-300 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[50%] bg-blue-300 rounded-t-md mx-0.5"></div>
                  <div className="w-1/6 h-[90%] bg-amber-300 rounded-t-md mx-0.5"></div>
                </div>
                <div className="absolute top-2 right-0 flex items-center">
                  <span className="text-white font-bold">5 000 000₽</span>
                  <div className="ml-2 flex items-center justify-center bg-amber-300 rounded-full w-8 h-8">
                    <Icon name="Shield" size={18} className="text-blue-900" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button 
          className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-lg px-8 py-6" 
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Запустить поток клиентов уже сегодня
        </Button>
      </header>

      {/* Advantages Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Не клики, а реальные контакты</h3>
              <p className="text-gray-600">10 000 номеров тех, кто уже интересуется вашим продуктом</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Icon name="Crown" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Эксклюзивность</h3>
              <p className="text-gray-600">Работаем только с одной компанией в вашей нише</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Icon name="Headphones" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Полное сопровождение</h3>
              <p className="text-gray-600">От скриптов до анализа звонков</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Наши гарантии</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg flex flex-col items-center text-center hover-scale">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-300 mb-4">
                <Icon name="BadgePercent" size={24} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                5 000 000₽ выручки — или мы вернем разницу
              </h3>
              <p className="text-blue-100">Мы уверены в нашем продукте и гарантируем результат</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg flex flex-col items-center text-center hover-scale">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-300 mb-4">
                <Icon name="ShieldCheck" size={24} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Юридическая безопасность
              </h3>
              <p className="text-blue-100">Все данные проверены по 152-ФЗ</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg flex flex-col items-center text-center hover-scale">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-300 mb-4">
                <Icon name="BadgeDollarSign" size={24} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Цена контакта — 52₽
              </h3>
              <p className="text-blue-100">Платите только за результат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-12">Дополнительные услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                  <Icon name="Database" size={20} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Индивидуальная CRM</h3>
                <p className="text-gray-600">Обучение сотрудников, гибкие сценарии общения</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-50 p-6 rounded-lg">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Прозвон клиентов</h3>
                <p className="text-gray-600">Доступен как дополнительная опция</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
              Запустить поток клиентов уже сегодня
            </h2>
            <p className="text-center mb-8">
              Оставьте заявку — и мы подготовим персональную стратегию за 24 часа
            </p>
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  className="bg-white/20 text-white placeholder:text-white/70 border-white/30"
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
                  className="bg-white/20 text-white placeholder:text-white/70 border-white/30"
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
                  className="bg-white/20 text-white placeholder:text-white/70 border-white/30"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold text-lg py-6"
              >
                Оставить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-2xl mb-2">B2B Leads</div>
              <div className="text-sm text-gray-300">
                Работаем строго в рамках закона. Все согласия клиентов подтверждены.
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center mb-2">
                <Icon name="Phone" size={16} className="mr-2" />
                <a href="tel:+78001234567" className="hover:text-amber-300">+7 (800) 123-45-67</a>
              </div>
              <div className="flex items-center">
                <Icon name="Send" size={16} className="mr-2" />
                <a href="https://t.me/b2bleads" className="hover:text-amber-300">Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
