'use client';

import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './CVForm.module.css';

export default function Education() {
    const { register, control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education',
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
                            <label className={styles.label}>Tên Trường</label>
                            <input {...register(`education.${index}.schoolName`)} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Ngành Học</label>
                            <input {...register(`education.${index}.major`)} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.grid3}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Bắt đầu</label>
                            <input {...register(`education.${index}.startDate`)} className={styles.input} placeholder="Tháng/Năm" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Kết thúc</label>
                            <input {...register(`education.${index}.endDate`)} className={styles.input} placeholder="Tháng/Năm" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Địa chỉ</label>
                            <input {...register(`education.${index}.address`)} className={styles.input} />
                        </div>
                    </div>
                </div>
            ))}

            <button type="button" onClick={() => append({})} className={styles.addBtn}>
                + Thêm trường học
            </button>
        </div>
    );
}
