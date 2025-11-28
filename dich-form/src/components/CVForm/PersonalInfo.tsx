'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './CVForm.module.css';

export default function PersonalInfo() {
    const { register } = useFormContext();

    return (
        <div>
            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Họ và Tên</label>
                    <input {...register('fullName')} className={styles.input} style={{ textTransform: 'uppercase' }} placeholder="NGUYỄN VĂN A" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Ngày Sinh</label>
                    <input type="date" {...register('dob')} className={styles.input} />
                </div>
            </div>

            <div className={styles.grid3}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Giới tính</label>
                    <select {...register('gender')} className={styles.select}>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Tôn Giáo</label>
                    <input {...register('religion')} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>SĐT</label>
                    <input {...register('phone')} className={styles.input} />
                </div>
            </div>

            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Quê Quán</label>
                    <input {...register('hometown')} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nơi Ở Hiện Tại</label>
                    <input {...register('currentAddress')} className={styles.input} />
                </div>
            </div>

            <div className={styles.grid3}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Hôn Nhân</label>
                    <select {...register('maritalStatus')} className={styles.select}>
                        <option value="Độc thân">Độc thân</option>
                        <option value="Đã kết hôn">Đã kết hôn</option>
                        <option value="Ly hôn">Ly hôn</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Sức Khỏe</label>
                    <input {...register('healthStatus')} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Trình độ tiếng Đài</label>
                    <input {...register('languageLevel')} className={styles.input} placeholder="N4" />
                </div>
            </div>
            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Bằng lái Ôtô</label>
                    <input {...register('carLicense')} className={styles.input} />
                </div>
            </div>
        </div>
    );
}
