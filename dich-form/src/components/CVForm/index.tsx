'use client';

import React from 'react';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import styles from './CVForm.module.css';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Family from './Family';
import SelfIntro from './SelfIntro';
import Certificates from './Certificates';
import OtherInfo from './OtherInfo';

export default function CVForm() {
    const methods = useForm({
        defaultValues: {
            education: [{}],
            experience: [{}],
            family: [{}],
            certificates: [{}]
        }
    });

    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = React.useState('');

    const onSubmit = async (data: FieldValues) => {
        setSubmitStatus('loading');
        setSubmitMessage('');
        try {
            const response = await fetch('/api/cv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setSubmitMessage('Lưu thông tin thành công!');
                console.log('Saved CV:', result.data);
            } else {
                setSubmitStatus('error');
                setSubmitMessage('Lỗi khi lưu thông tin: ' + result.error);
            }
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setSubmitMessage('Đã xảy ra lỗi khi gửi biểu mẫu: ' + error.message);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.container}>
                <div className={styles.header}>Sơ Yếu Lý Lịch</div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>Thông Tin Cá Nhân</div>
                    <PersonalInfo />
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>Quá Trình Học Tập</div>
                    <Education />
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>Quá Trình Làm Việc</div>
                    <Experience />
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>Gia Đình</div>
                    <Family />
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>Giới Thiệu Bản Thân</div>
                    <SelfIntro />
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>Bằng Cấp & Chứng Chỉ</div>
                    <Certificates />
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionHeader}>Thông Tin Khác</div>
                    <OtherInfo />
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <button type="submit" className={styles.submitBtn} disabled={submitStatus === 'loading'}>
                        {submitStatus === 'loading' ? 'ĐANG LƯU...' : 'LƯU THÔNG TIN'}
                    </button>
                    {submitMessage && (
                        <div style={{
                            marginTop: '10px',
                            padding: '10px',
                            borderRadius: '4px',
                            backgroundColor: submitStatus === 'success' ? '#d4edda' : '#f8d7da',
                            color: submitStatus === 'success' ? '#155724' : '#721c24',
                            border: `1px solid ${submitStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                        }}>
                            {submitMessage}
                        </div>
                    )}
                </div>
            </form>
        </FormProvider>
    );
}
