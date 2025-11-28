'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './CVForm.module.css';

export default function OtherInfo() {
    const { register } = useFormContext();

    return (
        <div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Lý Do Ứng Tuyển</label>
                <textarea {...register('reason')} className={styles.textarea} rows={4} placeholder="Tại sao bạn muốn ứng tuyển vị trí này?" />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>PR Bản Thân</label>
                <textarea {...register('selfPR')} className={styles.textarea} rows={4} placeholder="Hãy giới thiệu thêm về ưu điểm của bạn..." />
            </div>
        </div>
    );
}
