'use client';

import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './CVForm.module.css';

export default function Experience() {
    const { register, control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'experience',
    });

    return (
        <div>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.card}>
                    <button type="button" onClick={() => remove(index)} className={styles.removeBtn} title="Xóa">
                        &times;
                    </button>

                    <div className={styles.grid2}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Tên Công Ty</label>
                            <input {...register(`experience.${index}.companyName`)} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Nội Dung Công Việc</label>
                            <input {...register(`experience.${index}.jobDescription`)} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.grid2}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Bắt đầu</label>
                            <input {...register(`experience.${index}.startDate`)} className={styles.input} placeholder="Tháng/Năm" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Kết thúc</label>
                            <input {...register(`experience.${index}.endDate`)} className={styles.input} placeholder="Tháng/Năm" />
                        </div>
                    </div>
                </div>
            ))}

            <button type="button" onClick={() => append({})} className={styles.addBtn}>
                + Thêm kinh nghiệm
            </button>
        </div>
    );
}
