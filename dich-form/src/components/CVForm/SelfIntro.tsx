'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './CVForm.module.css';

export default function SelfIntro() {
    const { register } = useFormContext();

    return (
        <div>
            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Sở Trường</label>
                    <textarea {...register('strengths')} className={styles.textarea} rows={3} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Sở Đoản</label>
                    <textarea {...register('weaknesses')} className={styles.textarea} rows={3} />
                </div>
            </div>

            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Sở Thích</label>
                    <textarea {...register('hobbies')} className={styles.textarea} rows={3} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Tính Cách</label>
                    <textarea {...register('personality')} className={styles.textarea} rows={3} />
                </div>
            </div>

            <div className={styles.grid3}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nhóm Máu</label>
                    <input {...register('bloodType')} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Chiều Cao (cm)</label>
                    <input {...register('height')} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Cân Nặng (kg)</label>
                    <input {...register('weight')} className={styles.input} />
                </div>
            </div>

            <div className={styles.grid3}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Tay Thuận</label>
                    <input {...register('handedness')} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Thị Lực</label>
                    <input {...register('eyesight')} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Hút Thuốc</label>
                    <select {...register('smoking')} className={styles.select}>
                        <option value="Không">Không</option>
                        <option value="Có">Có</option>
                    </select>
                </div>
            </div>

            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Uống Rượu Bia</label>
                    <select {...register('drinking')} className={styles.select}>
                        <option value="Không">Không</option>
                        <option value="Có">Có</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Kỹ Năng Đặc Biệt Khác</label>
                    <input {...register('specialSkills')} className={styles.input} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Mục Đích Đi Đài Loan</label>
                <textarea {...register('purpose')} className={styles.textarea} rows={3} />
            </div>
        </div>
    );
}
