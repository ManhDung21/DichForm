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

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        alert(JSON.stringify(data, null, 2));
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

                <div style={{ marginTop: '20px' }}>
                    <button type="submit" className={styles.submitBtn}>
                        LƯU THÔNG TIN
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}
