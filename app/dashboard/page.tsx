'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, MessageSquare, Zap, Activity, Clock, Calendar, Target } from 'lucide-react';

const usageData = [
    { name: 'Mon', tokens: 2400, conversations: 12 },
    { name: 'Tue', tokens: 1398, conversations: 8 },
    { name: 'Wed', tokens: 9800, conversations: 25 },
    { name: 'Thu', tokens: 3908, conversations: 15 },
    { name: 'Fri', tokens: 4800, conversations: 18 },
    { name: 'Sat', tokens: 3800, conversations: 14 },
    { name: 'Sun', tokens: 4300, conversations: 16 },
];

const modelUsageData = [
    { name: 'GPT-4', value: 45, color: '#3b82f6' },
    { name: 'Claude 3', value: 30, color: '#8b5cf6' },
    { name: 'Gemini', value: 15, color: '#06b6d4' },
    { name: 'GPT-3.5', value: 10, color: '#10b981' },
];

const recentActivity = [
    {
        id: 1,
        action: 'Started conversation with GPT-4',
        time: '2 minutes ago',
        model: 'GPT-4',
        tokens: 245,
    },
    {
        id: 2,
        action: 'Generated code snippet',
        time: '15 minutes ago',
        model: 'Claude 3',
        tokens: 156,
    },
    {
        id: 3,
        action: 'Analyzed document',
        time: '1 hour ago',
        model: 'Gemini',
        tokens: 89,
    },
    {
        id: 4,
        action: 'Debugged React component',
        time: '2 hours ago',
        model: 'GPT-4',
        tokens: 312,
    },
    {
        id: 5,
        action: 'Created API documentation',
        time: '3 hours ago',
        model: 'Claude 3',
        tokens: 198,
    },
];

const stats = [
    {
        title: 'Total Tokens Used',
        value: '24,567',
        change: '+12.5%',
        changeType: 'positive',
        icon: Zap,
        gradient: 'from-yellow-500 to-orange-500',
    },
    {
        title: 'Active Conversations',
        value: '47',
        change: '+8.2%',
        changeType: 'positive',
        icon: MessageSquare,
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Response Time',
        value: '1.2s',
        change: '-15.3%',
        changeType: 'positive',
        icon: Clock,
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Success Rate',
        value: '98.7%',
        change: '+2.1%',
        changeType: 'positive',
        icon: Target,
        gradient: 'from-purple-500 to-pink-500',
    },
];

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] lg:ml-72">
            <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-gray-400">Welcome back! Here's your AI usage overview.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative">
                                    <div className={`inline-flex p-3 bg-gradient-to-br ${stat.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.changeType === 'positive'
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'bg-red-500/20 text-red-400'
                                            }`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Usage Chart */}
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white">Weekly Usage</h3>
                            <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full">
                                <TrendingUp className="w-4 h-4 text-blue-400" />
                                <span className="text-xs text-blue-400 font-medium">+23%</span>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={usageData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="name" stroke="#9ca3af" />
                                <YAxis stroke="#9ca3af" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1f2937',
                                        border: '1px solid #374151',
                                        borderRadius: '8px',
                                        color: '#f9fafb',
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="tokens"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                                    activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Model Usage Pie Chart */}
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6">Model Distribution</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={modelUsageData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {modelUsageData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1f2937',
                                        border: '1px solid #374151',
                                        borderRadius: '8px',
                                        color: '#f9fafb',
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {modelUsageData.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                    <span className="text-sm text-gray-400">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                        <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                            View All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentActivity.map((activity) => (
                            <div
                                key={activity.id}
                                className="flex items-center justify-between p-4 bg-gray-800/30 border border-gray-700/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{activity.action}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {activity.time}
                                            </span>
                                            <span className="px-2 py-1 bg-gray-700/50 rounded text-xs">
                                                {activity.model}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-400">{activity.tokens} tokens</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
<Line
    type="monotone"
    dataKey="tokens"
    stroke="var(--primary)"
    strokeWidth={2}
    dot={{ fill: 'var(--primary)' }}
/>
     
    {/* Pie Chart */ }
    < div className = "p-6 bg-[var(--card)] border border-[var(--border)] rounded-lg" >
                            <h2 className="text-lg font-semibold text-white mb-4">Model Usage</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        // data={modelUsage}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, value }) => `${name}: ${value}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {/* {modelUsage.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))} */}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'var(--sidebar)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                        }}
                                        labelStyle={{ color: 'var(--foreground)' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div >
